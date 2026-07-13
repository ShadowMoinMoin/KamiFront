import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Users, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { DiningTable } from "../../../shared/types/diningTable";
import { useReservations } from "../hooks/useReservations";
import Button from "../../../components/ui/Button";
import { useAuthStore } from "../../auth/store/authStore";

interface Props {
  table: DiningTable | null;
  onClose: () => void;
}

export default function ReservationModal({ table, onClose }: Props) {
  const { user, isAuthenticated } = useAuthStore();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { reservationsQuery, createReservation } = useReservations();
  const reservations = reservationsQuery.data || [];

  const {
    register,
    handleSubmit,
    watch
  } = useForm<any>();

  if (!table) return null;

  const date = watch("date");

  const today = new Date().toISOString().split("T")[0];

  const inputStyles = `w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 backdrop-blur-sm transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none`;

  const isPastTime = (time: string) => {
    if (!date) return false;

    const selected = new Date(`${date}T${time}`);

    return selected <= new Date();
  };
  const availableTimes = [
    "12:00", "12:30", "13:00", "13:30", "14:00",
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  const hasConflict = (start: string, end: string) => {
    const newStart = new Date(start).getTime();
    const newEnd = new Date(end).getTime();

    return reservations.some(r => {
      if (r.tableId !== table.id) return false;
      if (r.status === "CANCELLED") return false;

      const existingStart = new Date(r.startTime).getTime();
      const existingEnd = new Date(r.endTime).getTime();

      return newStart < existingEnd && newEnd > existingStart;
    });
  };

  const isTimeBlocked = (time: string) => {
    if (!date) return false;

    const testStart = `${date}T${time}`;
    const testEnd = `${date}T${time}`;

    return reservations.some(r => {
      if (r.tableId !== table.id) return false;
      if (r.status === "CANCELLED") return false;

      const existingStart = new Date(r.startTime).getTime();
      const existingEnd = new Date(r.endTime).getTime();

      return (
        new Date(testStart).getTime() < existingEnd &&
        new Date(testEnd).getTime() > existingStart
      );
    });
  };

  const onSubmit = async (data: any) => {
    if (!isAuthenticated()) {
      toast.error("Debes iniciar sesión para reservar una mesa");
      onClose();
      return;
    }
    if (!table) return;

    if (!data.date || !data.startHour || !data.endHour) {
      toast.error("Completa fecha y horas");
      return;
    }

    const start = `${data.date}T${data.startHour}`;
    const end = `${data.date}T${data.endHour}`;

    if (new Date(end) <= new Date(start)) {
      toast.error("La hora de fin debe ser mayor a la de inicio");
      return;
    }

    if (hasConflict(start, end)) {
      toast.error("Esta mesa ya está reservada en ese horario");
      return;
    }

    setIsSubmitting(true);

    await createReservation.mutateAsync({
      tableId: table.id,
      customerName: data.customerName,
      phone: data.phone,
      startTime: start,
      endTime: end,
      notes: data.notes || ""
    });
    toast.success("Reserva creada correctamente");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
        onClick={onClose}
        initial={{ opacity: 0, y: 40, scale: .98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: .98 }}
        transition={{ duration: .35, ease: "easeOut" }}
      >
        <motion.div
          className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-surface/95 backdrop-blur-xl shadow-glow"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="border-b border-white/10 px-8 py-6">
            <div className="flex justify-between">
              <div>
                <h2 className="font-display text-3xl font-light tracking-[0.08em] text-white">
                  Mesa #{table.tableNumber}
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-accent-light">
                  <Users className="w-4 h-4" />
                  Capacidad {table.capacity}
                </p>
              </div>

              <button onClick={onClose} className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white ">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8">

            <input
              placeholder="Nombre"
              defaultValue={user?.name}
              {...register("customerName", { required: true })}
              className={inputStyles}
            />

            <input
              placeholder="Teléfono"
              {...register("phone", { required: true })}
              className={inputStyles}
            />

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent-light">
                <Calendar className="w-4 h-4" />
                Fecha
              </label>

              <input
                type="date"
                min={today}
                {...register("date", { required: true })}
                className={inputStyles}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">

              <div>
                <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent-light">
                  <Clock className="w-4 h-4" />
                  Inicio
                </label>

                <select
                  {...register("startHour")}
                  className={inputStyles}
                >
                  {availableTimes.map((t) => (
                    <option
                      key={t}
                      value={t}
                      disabled={isPastTime(t) || isTimeBlocked(t)}
                      className="bg-surface text-white"
                    >
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent-light">
                  <Clock className="w-4 h-4" />
                  Fin
                </label>

                <select
                  {...register("endHour")}
                  className={inputStyles}
                >
                  {availableTimes.map((t) => (
                    <option
                      key={t}
                      value={t}
                      className="bg-surface text-white"
                    >
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              {...register("notes")}
              placeholder="Notas"
              className={inputStyles}
              rows={3}
            />

            {/* ACTIONS */}
            <div className="flex gap-2">
              <Button
                type="button"
                variant="secondary"
                className="flex-1"
                onClick={onClose}
              >
                Cancelar
              </Button>

              <Button
                disabled={isSubmitting}
                className="flex-1"
              >
                <Check className="h-4 w-4" />

                {isSubmitting
                  ? "Guardando..."
                  : "Reservar"}
              </Button>
            </div>

          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
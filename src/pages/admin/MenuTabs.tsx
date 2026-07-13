interface Props {

    activeTab: "products" | "categories";

    onChange: (
        tab: "products" | "categories"
    ) => void;

}


export default function MenuTabs({
    activeTab,
    onChange,
}: Props) {


    return (

        <div className="
            flex
            gap-2
            rounded-xl
            border
            border-border
            bg-surface
            p-2
        ">


            <button

                onClick={() => onChange("products")}

                className={`
                    flex-1
                    rounded-lg
                    px-5
                    py-3
                    transition

                    ${activeTab === "products"
                        ? "bg-accent text-black"
                        : "text-white/60 hover:bg-surface2"
                    }
                `}

            >
                Productos

            </button>



            <button

                onClick={() => onChange("categories")}

                className={`
                    flex-1
                    rounded-lg
                    px-5
                    py-3
                    transition

                    ${activeTab === "categories"
                        ? "bg-accent text-black"
                        : "text-white/60 hover:bg-surface2"
                    }
                `}

            >
                Categorías

            </button>


        </div>

    );
}
import type { TopProduct } from "../../shared/types/dashboard";


interface Props {

    topProducts: TopProduct[];

}


export default function MenuStats({
    topProducts
}: Props) {


    const bestSeller =
        topProducts[0];


    return (

        <div className="
            grid
            gap-4
            md:grid-cols-3
        ">


            <div className="
                rounded-2xl
                border
                border-border
                bg-surface
                p-6
            ">

                <p className="text-white/50">
                    Producto líder
                </p>


                <h3 className="
                    mt-2
                    font-display
                    text-2xl
                ">

                    {
                        bestSeller
                            ?
                            bestSeller.productName
                            :
                            "-"
                    }

                </h3>


            </div>



            <div className="
                rounded-2xl
                border
                border-border
                bg-surface
                p-6
            ">

                <p className="text-white/50">
                    Ventas del líder
                </p>


                <h3 className="
                    mt-2
                    text-3xl
                    font-bold
                ">

                    {
                        bestSeller
                            ?
                            bestSeller.quantity
                            :
                            0
                    }

                </h3>


            </div>



            <div className="
                rounded-2xl
                border
                border-border
                bg-surface
                p-6
            ">

                <p className="text-white/50">
                    Productos destacados
                </p>


                <h3 className="
                    mt-2
                    text-3xl
                    font-bold
                ">

                    {topProducts.length}

                </h3>


            </div>


        </div>

    );

}
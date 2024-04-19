import {Button} from "@/components/atoms/button";
import { getVacationItems } from "@/service/vacation";
import {DestinationCard} from "@/components/molecules/destinationCard";

export async function Destinations() {
    const items = await getVacationItems();

    return (
        <section className="container mt-[7.5rem]">
            <h2 className="text-center text-2xl font-semibold text-[#232631] lg:text-4xl">
               Explore Natural Destinations 
            </h2> 
            <p className="mx-auto mt-3 max-w-[25.5625rem] text-center text-base font-normal leading-[1.875rem] text-[#7B7B7B]">
                A new way to travel by air the easy and fast way. Try it now by
                filling out the form below!
            </p>
            <ul className="mt-[3.75rem] flex flex-wrap justify-center gap-[1.875rem]">
                {items?.map((item) => (
                    <li key={item.id}>
                        <DestinationCard item={item} />
                    </li>
                ))}
            </ul>
            <div className="mt-[3.75rem] text-center">
                <Button variant="outline" size="pill" className="h-[3.4375rem] text-lg">
                    View More
                </Button>
            </div>
        </section>
    );
}


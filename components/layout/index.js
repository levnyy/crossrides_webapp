
import Header from "@/components/header";

export default function Layout({children}){
    return(
        <div>
            <Header/>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}
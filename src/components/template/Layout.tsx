import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface LayoutProps {
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex flex-col min-h-screen justify-between`}>
            <header className={`bg-claro-100`}>
                <Header />
            </header>

            <main className={`flex-1`}>
                {props.children}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Home (){    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
            <ModeToggle/>
            <p className="text-lg">This is the home page of the application.</p>
        </div>
    )
}
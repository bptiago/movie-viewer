import { InputWithButton } from "@/components/InputWithButton";
import { Input } from "@/components/ui/input";
import "@/styles/home.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-3/5 home-banner py-48 rounded-b-lg">
        <div className="w-full px-16">
          <h2 className="text-white">Lorem Ipsuldmaskl das dmaskl das</h2>
          <InputWithButton
            placeholder="Search anything here..."
            body="Search"
          />
        </div>
      </div>
    </main>
  );
}

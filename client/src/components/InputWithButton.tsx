import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface typeProps {
  placeholder: string;
  body: string;
}

export function InputWithButton({ placeholder, body }: typeProps) {
  return (
    <div className="flex w-full space-x-2">
      <Input type="text" placeholder={placeholder} />
      <Button type="submit">{body}</Button>
    </div>
  );
}

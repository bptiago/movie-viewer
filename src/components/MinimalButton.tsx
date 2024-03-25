import React from "react";

interface typeProps {
  body: string;
  className?: any;
}

const MinimalButton = ({ body, className }: typeProps) => {
  return (
    <a
      href="#faq"
      className={`inline-block no-underline transition-colors hover:text-foreground text-muted-foreground ${className}`}
    >
      {body}
    </a>
  );
};

export default MinimalButton;

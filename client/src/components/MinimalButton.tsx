import React from "react";

const MinimalButton = ({ body }: { body: string }) => {
  return (
    <a
      href="#faq"
      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
    >
      {body}
    </a>
  );
};

export default MinimalButton;

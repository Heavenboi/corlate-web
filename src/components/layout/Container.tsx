import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SectionContainer({
  children,
  className,
  ...props
}: Omit<ContainerProps, 'as'>) {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export function PageContainer({
  children,
  className,
  ...props
}: Omit<ContainerProps, 'as'>) {
  return (
    <main className={cn('flex-1', className)} {...props}>
      {children}
    </main>
  );
}
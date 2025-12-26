import { cn } from "../../lib/utils";

export type SectionComponentProps = React.HTMLAttributes<HTMLElement> & {
    ref?: React.Ref<HTMLElement>;
};

const SectionComponent = ({children, className, ref, ...props}: SectionComponentProps) => {
    return ( <section ref={ref} className={
        cn("flex min-h-screen justify-center items-center", className)
    }
    {...props}>
        {children}
    </section> );
}

export default SectionComponent;
import cn from "classnames";

const Container = ({ className, children }: any) => {
  return (
    <div className={cn("px-4 sm:px-8 lg:px-20", className)}>{children}</div>
  );
};

export default Container;

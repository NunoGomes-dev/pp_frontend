import { memo } from "react";

const Loading = ({ children, className, ...others }) => (
  <div
    className={`bg-[#718096] rounded-lg animate-skeleton ${className}`}
    {...others}
  >
    {children}
  </div>
);

const Skeleton = ({ isLoading, children, className, ...others }) => {
  if (children) {
    if (isLoading)
      return (
        <Loading className={className} {...others}>
          <div className="opacity-0" {...others}>
            {children}
          </div>
        </Loading>
      );

    return children;
  } else {
    return <Loading className={className} {...others} />;
  }
};

export default memo(Skeleton);

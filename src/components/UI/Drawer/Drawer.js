const Drawer = ({ isOpen = false, children, closeDrawer }) => {
  // useOutsideClick(wrapperRef, isOpen, closeDrawer);

  return (
    <>
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-black ${
          isOpen ? "opacity-40" : "opacity-0"
        } transition-all duration-200`}
        style={{ zIndex: isOpen ? 1000 : -1 }}
        onClick={() => closeDrawer()}
      />
      <div
        className="h-full w-[22rem] fixed py-4 px-0 bg-white top-0 right-0 transition-all duration-500 border-l border-solid border-[#e0e0e0]"
        style={{
          transform: `translateX(${isOpen ? "0px" : "22rem"})`,
          zIndex: 1000,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;

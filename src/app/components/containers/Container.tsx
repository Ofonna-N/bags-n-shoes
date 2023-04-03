interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-[2rem] mx-auto md:px-[4rem] max-w-[120rem]">
      {children}
    </div>
  );
};

export default Container;

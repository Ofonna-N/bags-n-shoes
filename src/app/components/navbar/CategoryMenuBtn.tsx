"use client";

interface Props {
  label: string;
}

const CategoryMenuBtn: React.FC<Props> = ({ label }) => {
  return <div>{label}</div>;
};

export default CategoryMenuBtn;

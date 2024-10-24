"use client"
interface SectionTitleProps {
    title: string;
    subTitle: string;
}

const SectionTitle = ({ title, subTitle }:SectionTitleProps) => {
    return (
        <div className="">
            <h2 
                className="lg:text-2xl text-xl font-bold uppercase animate-fadeIn"
            >
                <span className="text-[#00BBA6]">❮</span>{title}<span className="text-[#00BBA6]">/❯</span>
            </h2>
            <h3
                className="text-[#00BBA6] animate-fadeIn text-xs"
            >
                {subTitle}
            </h3>
        </div>
    );
};

export default SectionTitle;

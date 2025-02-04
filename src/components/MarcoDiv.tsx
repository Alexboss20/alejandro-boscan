import type {ReactNode} from "react";

interface PaintingFrameProps {
  children: ReactNode;
}

const PaintingFrame: React.FC<PaintingFrameProps> = ({ children }) => {
  return (
    <div className="relative scale-75 md:scale-90 w-72 h-40 flex justify-center items-center">
      {/* Div de la barra que sobresale */}
      <div className="absolute flex">
          <div
            className="w-10 h-56 bg-blue-600 clip-path-custom-shape rotate-[26deg]"
          ></div>
          <div
            className="w-10 h-56 bg-[#FF073A] clip-path-custom-shape rotate-[26deg]"
          ></div>
      </div>

      {/* Div blanco */}
      <div
        className="bg-white border-black border-2 absolute rounded-xl hover:scale-110 transition-all"
        style={{
          width: '250px',
          height: '150px',
          clipPath: 'polygon(100% 0, 100% 80%, 80% 80%, 65% 100%, 0 100%, 0 0)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PaintingFrame;
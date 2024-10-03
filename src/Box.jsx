import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Letter } from "./Letter";
import { ELS } from "./data";
import { getRandomNumberInRange } from "./functions";

export const Box = () => {
  const [firstLine, setFirstLine] = useState(
    getRandomNumberInRange(1, 3, null),
  );
  const [secondLine, setSecondLine] = useState(
    getRandomNumberInRange(4, 6, null),
  );
  const [thirdLine, setThirdLine] = useState(
    getRandomNumberInRange(7, 9, null),
  );

  useEffect(() => {
    let prevFirstLine = firstLine;
    let prevSecondLine = secondLine;
    let prevThirdLine = thirdLine;

    const interval = setInterval(() => {
      setFirstLine(getRandomNumberInRange(1, 3, prevFirstLine));
      prevFirstLine = firstLine;
      setSecondLine(getRandomNumberInRange(4, 6, prevSecondLine));
      prevSecondLine = secondLine;
      setThirdLine(getRandomNumberInRange(7, 9, prevThirdLine));
      prevThirdLine = thirdLine;
    }, 1500);

    return () => clearInterval(interval);
  }, [firstLine, secondLine, thirdLine]);

  return (
    <>
      <section className="Box">
        {[firstLine, secondLine, thirdLine].map((line, index) => (
          <ul key={index}>
            <AnimatePresence>
              {ELS.filter(
                (item) =>
                  item.line >= index * 3 + 1 && item.line <= index * 3 + 3,
              ).map(({ letter, line: itemLine }) => (
                <Letter
                  key={itemLine}
                  letter={letter}
                  line={line}
                  index={itemLine}
                />
              ))}
            </AnimatePresence>
          </ul>
        ))}
      </section>
      <div className="FINAL">
        {ELS.map(
          ({ letter, line }) =>
            (line === firstLine || line === secondLine || line === thirdLine) &&
            letter,
        )}
      </div>
    </>
  );
};

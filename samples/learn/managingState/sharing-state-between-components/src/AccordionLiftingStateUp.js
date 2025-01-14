import { useState } from 'react';

export default function AccordionLiftingStateUp() {
  // step3     nature of the state changed  boolean -> number / CONTROL enable just 1!
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <PanelLiftingStateUp
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </PanelLiftingStateUp>
      <PanelLiftingStateUp
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </PanelLiftingStateUp>
    </>
  );
}

// step2:   state -- move to -- COMMON component
function PanelLiftingStateUp({
                 title,
                 children,
                 isActive,
                 onShow
               }) {
  // step1:   state removed | child component
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
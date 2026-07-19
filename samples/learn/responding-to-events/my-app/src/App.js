import './App.css';
import {ButtonWithEventHandler, ButtonInline, ButtonWrongInvoke, ReadingPropsInEventHandlers, Toolbar, NamingEventHandlerProps} from "./EventHandler";
import {ScrollDoesNotBubble, BubblingExample, EventObjectExample, ButtonPassedHandler, CapturePhaseEvents, SignupPreventingDefaultBehavior, SignupWithDefaultBehavior} from "./EventPropagation";
import {LightSwitchChallenge1, LightSwitchChallenge1Solution1, LightSwitchChallenge1Solution2} from "./Challenge1";
import {Challenge2} from "./Challenge2";

function App() {
  return (
    <>
      <h1>1. Adding event handlers</h1>
      <ButtonWithEventHandler />
      <ButtonInline />
      <h3>⚠️ pass != invoke (this one fires on render!)</h3>
      <ButtonWrongInvoke />

      <h2>1.1 Reading props | event handlers</h2>
      <ReadingPropsInEventHandlers />

      <h2>1.2 Passing event handlers -- as -- props</h2>
      <Toolbar />

      <h2>1.3 Naming event handler props</h2>
      <NamingEventHandlerProps />

      <h1>2. Event propagation</h1>
      <h2>Event bubbles up | tree</h2>
      <BubblingExample />
      <h3>⚠️ EXCEPT onScroll — does NOT bubble</h3>
      <ScrollDoesNotBubble />
      <h2>2.1 Stopping propagation</h2>
      <h3>Event object (`e`) — read info & stop propagation</h3>
      <EventObjectExample />
      <CapturePhaseEvents />

      <h2>2.2 Passing handlers -- as -- ALTERNATIVE to propagation</h2>
      <div onClick={() => console.log('Parent div — this will NOT fire (no propagation)')}>
        <ButtonPassedHandler onClick={() => alert('Parent specified: Upload complete!')}>
          Upload Image
        </ButtonPassedHandler>
        <ButtonPassedHandler onClick={() => alert('Parent specified: Playing movie!')}>
          Play Movie
        </ButtonPassedHandler>
      </div>

      <h2>2.3 Preventing DEFAULT behavior</h2>
      <SignupWithDefaultBehavior />
      <SignupPreventingDefaultBehavior />

      <h1>3. Can event handlers have side effects?</h1>
      <h2>3.1 Challenge1</h2>
      <LightSwitchChallenge1/>
      <LightSwitchChallenge1Solution1/>
      <LightSwitchChallenge1Solution2/>
      <h2>3.2 Challenge2</h2>
      <Challenge2/>
    </>
  );
}

export default App;

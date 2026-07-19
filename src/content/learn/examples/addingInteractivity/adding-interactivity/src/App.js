import './App.css';
import Gallery from './Gallery';
import Toolbar from './Toolbar';
import StateSnapshot from './StateSnapshot';
import QueueStateUpdates from './QueueStateUpdates';
import UpdateStateWhichAreObject from './UpdateStateWhichAreObject';
import UpdateStateWhichAreObjectCopyingViaImmer from './UpdateStateWhichAreObjectCopyingViaImmer';

export default function App() {
  return (
    <>
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
      <Gallery />
      <StateSnapshot />
      <QueueStateUpdates />
      <UpdateStateWhichAreObject />
      <UpdateStateWhichAreObjectCopyingViaImmer />
    </>
  );
}



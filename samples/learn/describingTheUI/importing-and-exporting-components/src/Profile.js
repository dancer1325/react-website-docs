import ProfileAtTopLevel from  './ProfileAtTopLevel.js'
import Congratulations from './Congratulations.js'

export default function Profile() {
  return (
    <>
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      <ProfileAtTopLevel />
      <Congratulations />
    </>
  )
}

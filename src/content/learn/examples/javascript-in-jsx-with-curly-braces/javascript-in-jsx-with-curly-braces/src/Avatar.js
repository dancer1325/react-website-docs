export default function Avatar() {
  const avatar = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Noether.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    // 1. hardcoded values
/*    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />*/

    // 2. variables -- via -- `{}`
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

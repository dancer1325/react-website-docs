// CAPTURE a JSX -- via -- built-in `children` prop
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function PropJSX() {
  const imageVariables = {
    person: {
      name: 'Lin Lanying',
      imageId: '1bX5QH6'
    },
    size:20
  }
  return (
    <Card>
      {/* nested component */}
      <img
        className="avatar"
        src={'https://i.imgur.com/' + imageVariables.person.imageId + '.jpg'}
        alt={imageVariables.person.name}
        width={imageVariables.size}
        height={imageVariables.size}
      />
    </Card>
  );
}
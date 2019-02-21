import React, { useState, useEffect } from 'react';
import { Card, Image, Icon, Button, Divider } from 'semantic-ui-react';

function UserCard({ name: initialName, role: initialrole, picture, online, id, removeUser }) {
  const [name, setName] = useState(initialName);
  const [role, setRole] = useState(initialrole)
  const [destruction, setDestruction] = useState(false)

  async function handleRemoveUser() {
    await setDestruction(true);
    setTimeout(() => removeUser(id), 800)
  }
  return (
    <div className={"card-item" + (destruction ? ' remove' : '')}>
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={picture} />
          <Card.Header>
            <input style={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Card.Header>
          <Card.Meta>
            <input style={styles.input} className="meta" type="text" value={role} onChange={e => setRole(e.target.value)} />
          </Card.Meta>
          <Card.Description>
            <Icon name="circle" size='small' color={online ? 'green' : 'red'} />
            {online ? 'Available' : 'Not available'}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button size="tiny" color="red" basic onClick={handleRemoveUser}>Remove</Button>
        </Card.Content>
      </Card >
    </div>
  )
}


const styles = {
  input: {
    border: 'none',
    textTransform: 'capitalize'
  }
}

export default UserCard;
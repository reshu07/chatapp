//This component handles rendering all of our messages //and scrolling to the bottom of the list every time a //new message is added.
import * as React from 'react';
import '../../styles/components/Messages.scss';
import { Message as MessageModel } from 'type-script-server/src/index';

import { Message } from './Message';

interface OwnProps {
  username: string,
  messages: MessageModel[]
}

interface OwnState {
}

export class Messages extends React.Component<OwnProps, OwnState> {

  componentDidUpdate() {
    // get the UserMessagelist container and set the scrollTop to the height of the container
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the UserMessages in the state and create a UserMessage component
    const messages = this.props.messages.map((message: MessageModel, i) => {
        return (
          <Message
            key={i}
            username={message.name}
            message={message.message}
            fromMe={message.name === this.props.username} />
        );
      });


    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }
}

export const MessagesTest:React.ComponentClass<OwnProps> = Messages;
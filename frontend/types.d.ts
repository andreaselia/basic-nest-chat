interface Message {
  text: string;
}

interface Props {
  message: Message;
}

type AddMessage = (text: string) => void;

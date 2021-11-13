interface Message {
  text: string;
  date: any;
}

interface Props {
  message: Message;
}

type AddMessage = (text: string) => void;

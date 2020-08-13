

export class Message {
  user: string;
  text: string;
  time: Date;

  constructor(user: any, text: string) {
    this.user = user;
    this.text =text;
    this.time = new Date()
  }

}


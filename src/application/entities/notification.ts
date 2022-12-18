import { randomUUID } from 'crypto';
import { Replace } from './../../helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content /* Esse tipo foi criado no arquivo content.ts */;
  category: string;
  canceledAt?: Date | null;
  readAt?: Date | null /* Fazer isso é o mesmo que dizer que readAt pode ser Date, undefined ou nulo (Se fosse apenas Date, só poderia ser undefined ou nulo). Com o null é possível tirar a informação Date do readAt. O undefined é quando não foi informado o Date*/;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  /* Ai criar uma instância da classe, é passado os props e aqui eles são atribuidos ao props da classe */
  /* O Replace foi criado em helpers e permiter que os tipos sejam alterados. Dessa forma o createdAt continua sendo obrigatório existir, mas não precisa ser fornecio como parâmetro */
  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id =
      id ??
      randomUUID(); /* Tem como transformar isso em uma classe, para sempre randorizar um id e extender nessa classe e em outras que terão id */
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unRead() {
    this.props.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}

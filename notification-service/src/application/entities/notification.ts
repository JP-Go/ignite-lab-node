import type { Replace } from 'src/helpers/replace';
import { Content } from './content';

export interface NotificationProps {
  content: Content;
  category: string;
  recipientId: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;
  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
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

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
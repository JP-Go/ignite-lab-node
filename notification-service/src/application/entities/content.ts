export class Content {
  private readonly content: string;

  constructor(value: string) {
    const isContentLengthValid = this.validateContentLength(value);
    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }
    this.content = value;
  }

  public get value(): string {
    this.validateContentLength;
    return this.content;
  }

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }
}

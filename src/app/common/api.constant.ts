export class ApiConstant {

  private static PROTOCOL = 'http';
  private static PROTOCOL_SEPARATOR = '://';
  private static DOMAIN = 'localhost';
  private static DOMAIN_SEPARATOR = ':';
  private static host = '8083';
  private static BASE_SEPARATOR = '/';

  // base url = http://localhost:8082/

  static getBaseUrl(): string {
    return this.PROTOCOL +
      this.PROTOCOL_SEPARATOR +
      this.DOMAIN +
      this.DOMAIN_SEPARATOR +
      this.host +
      this.BASE_SEPARATOR;
  }
}

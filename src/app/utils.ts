export class Utils {
  static is_sub_string(base: string, sub_string: string): boolean {
    return base.toLowerCase().includes(sub_string.toLowerCase())
  }

}

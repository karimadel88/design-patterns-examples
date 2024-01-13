class Database {
  /**
   * instance of Database
   */
  private static instance: Database;

  /**
   * Get instance of Database
   */
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
      return Database.instance;
    }
    return Database.instance;
  }
}

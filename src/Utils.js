class Utils {
  static verify_fp() {
    // TODO, add proper verify fp method
    return "verify_l9crwi93_kIOkZI3S_l9I2_4ARw_8GFp_IvNf0zaXa6DI";
  }

  static makePayload(data, navigator) {
    return JSON.stringify({
      status: "ok",
      data: {
        ...data,
        navigator
      }
    })
  }
}

module.exports = Utils;

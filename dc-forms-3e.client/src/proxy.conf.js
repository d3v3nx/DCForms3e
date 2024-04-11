const PROXY_CONFIG = [
  {
    context: [
      "/FormData",
    ],
    target: "https://localhost:7223",
    secure: false
  }
]

module.exports = PROXY_CONFIG;

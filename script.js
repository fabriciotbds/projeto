function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de homem sorrindo usando óculos escuros e blusa e camiseta escura com um roxo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de homem sorrindo usando óculos e camiseta preta com fundo amarelo mostarda"
    )
  }
}

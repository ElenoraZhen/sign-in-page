const form = document.getElementById("sign-in-form");

form.addEventListener("submit", function (e) {
  // TODO: 阻止原本的事件發生
  e.preventDefault();

  // TODO: 取得帳號密碼的 input 元件
  const addr = form["addr"];
  const password = form["password"];
  if (addr.value === "" || password.value === "") {
    alert("帳號密碼不能為空!");
  }

  // TODO: 將帳號密碼傳遞到後端，驗證是否正確

  // TODO: 驗證完畢後的事件
  addr.value = "";
  password.value = "";
});

const addr = document.getElementById("addr");
const password = document.getElementById("password");

const addrHintText = document.getElementById("addr-hint-text");
const passwordHintText = document.getElementById("password-hint-text");

addr.addEventListener("blur", function (e) {
  if (addr.value !== "") {
    addrHintText.classList.add("-translate-y-5", "text-xs", "text-[#5bbea0]");
  } else {
    addrHintText.classList.remove(
      "-translate-y-5",
      "text-xs",
      "text-[#5bbea0]"
    );
  }
});

password.addEventListener("blur", function (e) {
  if (password.value !== "") {
    passwordHintText.classList.add(
      "-translate-y-5",
      "text-xs",
      "text-[#5bbea0]"
    );
  } else {
    passwordHintText.classList.remove(
      "-translate-y-5",
      "text-xs",
      "text-[#5bbea0]"
    );
  }
});

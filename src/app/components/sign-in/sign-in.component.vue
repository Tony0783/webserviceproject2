<template>
  <div class="sign-in">
    <div class="bg-image"></div>
    <div class="container" v-if="!isLoggedIn">
      <div id="phone">
        <div id="content-wrapper">
          <!-- 로그인 카드 -->
          <div :class="['card', { hidden: !isLoginVisible }]" id="login">
            <form @submit.prevent="handleLogin">
              <h1>Sign in</h1>
              <div class="input" :class="{ active: isEmailFocused || email }">
                <input
                  id="email"
                  type="email"
                  v-model="email"
                  @focus="focusInput('email')"
                  @blur="blurInput('email')"
                  required
                />
                <label for="email">Username or Email</label>
                <span class="focus-effect"></span>
              </div>
              <div class="input" :class="{ active: isPasswordFocused || password }">
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  @focus="focusInput('password')"
                  @blur="blurInput('password')"
                  required
                />
                <label for="password">Password</label>
                <span class="focus-effect"></span>
              </div>
              <!-- Remember me 체크박스 -->
              <div class="remember-me">
                <input type="checkbox" id="remember-me" v-model="rememberMe" />
                <label for="remember-me">Remember me</label>
              </div>
              <button :disabled="!isLoginFormValid">Login</button>
            </form>
            <a href="javascript:void(0)" class="account-check" @click="toggleCard">
              Don't have an account? <b>Sign up</b>
            </a>
          </div>

          <!-- 회원가입 카드 -->
          <div :class="['card', { hidden: isLoginVisible }]" id="register">
            <form @submit.prevent="handleRegister">
              <h1>Sign up</h1>
              <div class="input">
                <input
                  id="register-email"
                  type="email"
                  v-model="registerEmail"
                  required
                />
                <label for="register-email">Email</label>
                <span class="focus-effect"></span>
              </div>
              <div class="input">
                <input
                  id="register-password"
                  type="password"
                  v-model="registerPassword"
                  required
                />
                <label for="register-password">Password</label>
                <span class="focus-effect"></span>
              </div>
              <div class="input">
                <input
                  id="confirm-password"
                  type="password"
                  v-model="confirmPassword"
                  required
                />
                <label for="confirm-password">Confirm Password</label>
                <span class="focus-effect"></span>
              </div>
              <!-- 약관 동의 체크박스 -->
              <div class="terms-conditions">
                <input type="checkbox" id="terms" v-model="termsAccepted" />
                <label for="terms">I agree to the terms and conditions</label>
              </div>
              <button :disabled="!isRegisterFormValid">Register</button>
            </form>
            <a href="javascript:void(0)" id="gotologin" class="account-check" @click="toggleCard">
              Already have an account? <b>Sign in</b>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 로그아웃 버튼 표시 (로그인 상태일 경우) -->
    <div v-else class="logout-container">
      <h2>Welcome, {{ email }}</h2>
      <button @click="handleLogout">Logout</button>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from '../../store/auth'; // auth store import
import AuthService from "../../util/auth/auth.service";

export default {
  name: "SignIn",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore(); // Pinia store 사용
    const isLoginVisible = ref(true);
    const email = ref("");
    const password = ref("");
    const registerEmail = ref("");
    const registerPassword = ref("");
    const confirmPassword = ref("");
    const rememberMe = ref(false); // Remember me 상태
    const termsAccepted = ref(false); // 약관 동의 상태

    const isEmailFocused = ref(false);
    const isPasswordFocused = ref(false);

    const isLoginFormValid = computed(() => email.value && password.value);
    const isRegisterFormValid = computed(() => {
      return (
        registerEmail.value &&
        registerPassword.value &&
        confirmPassword.value &&
        registerPassword.value === confirmPassword.value &&
        termsAccepted.value // 약관 동의 확인
      );
    });

    // 로그인 처리 함수
    const handleLogin = async () => {
      try {
        const response = await AuthService.tryLogin(email.value, password.value);
        if (response) {
          if (rememberMe.value) {
            localStorage.setItem('savedEmail', email.value);
          } else {
            localStorage.removeItem('savedEmail');
          }
          authStore.login(password.value); // Pinia store를 사용해 로그인 상태 변경
          alert("로그인 성공!");
          router.push("/main");
        } else {
          throw new Error("로그인에 실패했습니다.");
        }
      } catch (error) {
        alert("로그인 실패: " + error.message);
        console.error(error);
      }
    };

    // 회원가입 처리 함수
    const handleRegister = async () => {
      try {
        const response = await AuthService.tryRegister(registerEmail.value, registerPassword.value);
        if (response) {
          alert("회원가입 성공! 로그인 화면으로 이동합니다.");
          isLoginVisible.value = true;
        } else {
          throw new Error("회원가입에 실패했습니다.");
        }
      } catch (error) {
        alert("회원가입 실패: " + error.message);
        console.error(error);
      }
    };

    const handleLogout = () => {
      authStore.logout(); // Pinia store를 사용해 로그아웃 상태 변경
      email.value = "";
      password.value = "";
      alert("로그아웃 성공!");
    };

    const toggleCard = () => {
      isLoginVisible.value = !isLoginVisible.value;
    };

    const focusInput = (inputName) => {
      if (inputName === "email") isEmailFocused.value = true;
      if (inputName === "password") isPasswordFocused.value = true;
    };

    const blurInput = (inputName) => {
      if (inputName === "email") isEmailFocused.value = false;
      if (inputName === "password") isPasswordFocused.value = false;
    };

    // 로컬 스토리지에서 이메일 가져오기 (Remember me 기능)
    onMounted(() => {
      const savedEmail = localStorage.getItem('savedEmail');
      if (savedEmail) {
        email.value = savedEmail;
        rememberMe.value = true;
      }
    });

    return {
      isLoginVisible,
      email,
      password,
      registerEmail,
      registerPassword,
      confirmPassword,
      rememberMe,
      termsAccepted,
      isEmailFocused,
      isPasswordFocused,
      isLoginFormValid,
      isRegisterFormValid,
      isLoggedIn: authStore.isLoggedIn, // Pinia 상태 사용
      handleLogin,
      handleRegister,
      handleLogout,
      toggleCard,
      focusInput,
      blurInput,
    };
  },
};
</script>

<style scoped>

:root {
  --container-start-x: -50%;
  --container-end-x: -90%;
  --container-start-y: -58%;
  --container-end-y: -42%;
  --container-start-color: #ECECEC;
  --container-end-color: #100f0f;
}

 .bg-image {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-image: url('https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
   background-size: cover;
   background-position: center;
 }

.bg-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(27, 27, 27, 0.90);
}

a {
  text-decoration:none;
  margin:0;
  padding: 0;
}

.container {
  height: 100vh;
  width: 100svw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#phone {
  width: 50svw;
  max-width: 80dvh;
  max-height: 50dvh;
  aspect-ratio: 3.35 / 4;
  border-radius: min(2.5cqw, 2.0cqh);
  text-align: center;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


@media (max-height: 600px) {
  #phone {
    transform: translate(-50%, -50%) scale(0.5); /* Scale down on small screens */
  }
}

@media (max-height: 400px) {
  #phone {
    transform: translate(-50%, -50%) scale(0.3); /* Further scale down */
  }
}

#content-wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position:relative;
}

input {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 2.5rem;
  padding: 0;
  margin: 0;
}


.read-text {
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 10px; /* 원하는 들여쓰기 크기로 조정하세요 */
  color: #2b2b2b !important;
  font-weight: 900;
}

h1 {
  color: #00eaff;
  text-align: center;
  margin-bottom: 20px;
}

button {
  display:block;
  border-radius:25px;
  border:none;
  width:100%;
  background-color: #2069ff;
  color:#fff;
  padding:15px;
  text-transform:uppercase;
  letter-spacing:2px;
  box-shadow: 0px 10px 30px rgba(23,83,209,0.3);
  transition: all 0.2s ease;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #008fb3;
}

.input {
  position: relative;
  margin-top: 1.5rem;
}

.line-active {
  border-bottom:1px solid #2069ff !important;
  box-shadow: 0px 1px 0px #2069ff !important;
}

.input input {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 2.5rem;
  width: 100%;
  font-size: 1rem;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s ease;
}

.input label {
  color: #9e9e9e;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  font-size: 1rem;
  cursor: text;
  transition: all 0.3s ease;
  transform-origin: 0% 100%;
  text-align: initial;
  transform: translateY(12px);
  pointer-events: none;
}
.input input:focus + label,
.input input:not(:placeholder-shown) + label {
  transform: translateY(-20px);
  color: #00eaff;
}
.focus-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background: #00eaff;
  transition: all 0.4s ease;
}
.input input:focus ~ .focus-effect {
  width: 100%;
}

.input input:focus {
  border-bottom: 2px solid #00eaff;
}

.label-active {
  transform: translateY(-14px) scale(0.8) !important;
  transform-origin: 0 0 !important;
}

.label-blue {
  color: #2069ff !important;
}

[type="checkbox"]:not(:checked), [type="checkbox"]:checked {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

[type="checkbox"]+label {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  display: inline-block;
  height: 25px;
  line-height: 22px;
  font-size: 1rem;
  user-select: none;
}

[type="checkbox"]+label:before, [type="checkbox"]:not(.filled-in)+label:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  z-index: 0;
  border: 2px solid #5a5a5a;
  border-radius: 3px;
  margin-top: 2px;
  transition: .2s;
}

[type="checkbox"]:not(.filled-in)+label:after {
  border: 0;
  transform: scale(0);
}

[type="checkbox"]:checked+label:before {
  top: -4px;
  left: -5px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #2069ff;
  border-bottom: 2px solid #2069ff;
  transform: rotate(40deg);
  backface-visibility: hidden;
  transform-origin: 100% 100%;
  border-radius: 1px;
}

.checkbox {
  margin-top:2rem;
  display:block;
  margin-bottom:2rem;
}

.remember {
  float:left;
}

.forgot {
  float:right;
}

.forgot a {
  text-decoration:none;
  color:#000;
  font-weight:900;
  line-height: 22px;
}

.card {
  border-radius:10px;
  width:100%;
  max-width: 800px;
  position:absolute;
  background: #1c1c1c;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.5);
  transition: all 0.4s ease;

  top: 50%;

  left: 50%;
  transform: translateX(-50%);
}

.card form {
  transform:translateX(0px);
  transition: all 0.3s 0.4s ease;
}

#login {
  z-index:2;
  top: 5svh;
}

#register {
  z-index:2;
  top: 5svh;
}

.account-check {
  width:100%;
  text-align:center;
  position:absolute;
  bottom:15px;
  left:0;
  opacity:0;
  text-decoration:none;
  visibility:hidden;
  color:#fff;
  padding:10px;
  transition: all 0.2s ease;
}

.account-check:active {
  color:#000;
  transform: translateY(2px);
}

#register.hidden {
  top:calc(5svh + 90px) !important;
  z-index:1;
}

#login.hidden {
  top:calc(5svh + 220px) !important;
  z-index:1;
}

.card.hidden {
  background-color:#2069ff;
  box-shadow: 0px 20px 40px rgba(23,83,209,0.8);
  padding:0px 30px 0px 30px;

}

#register.hidden form {
  transform:translateX(20px);
}

#login.hidden form {
  transform:translateX(-20px);
}

.hidden form {
  opacity:0;
  transition: all 0.3s ease;
}

.hidden .account-check {
  opacity:1;
  visibility:visible;
  z-index:2;
  transition: all 0.2s ease;
}

.register-swap {
  animation: register-swap 0.5s ease forwards;
}

.login-swap {
  animation: login-swap 0.5s ease forwards;
}

.active > label {
  color: rgba(0, 0, 0, 0);
}

@keyframes register-swap {
  0% {transform: translate(0%, 0%)}
  50% {transform: translate(30%, 0%);}
  0% {transform: translate(0%, 0%)}
}

@keyframes login-swap {
  0% {transform: translate(0%, 0%)}
  50% {transform: translate(-70%, 0%);}
  0% {transform: translate(0%, 0%)}
}

@media (max-width: 768px) {

  #phone {
    width: 70%;
    transform: translate(-50%, -70%) scale(1); /* Scale down on small screens */
  }

  #login {
    top: -2svh !important;
  }

  #register {
    top: -2svh !important;
  }

  #register.hidden {
    top:calc(5svh + 90px) !important;
    z-index:1;
  }

  #login.hidden {
    top:calc(5svh + 90px) !important;
    z-index:1;
  }
}
.remember-me {
  margin-top: 10px;
  text-align: left;
  color: #fff;
}

.terms-conditions {
  margin-top: 20px;
  text-align: left;
  color: #fff;
}

.terms-conditions input[type="checkbox"] {
  margin-right: 10px;
}

.terms-conditions label {
  font-weight: normal;
}

</style>
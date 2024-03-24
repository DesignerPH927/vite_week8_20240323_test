<template>
  <VLoading :active="isLoading"></VLoading>
  <!-- newsInfoModal -->
  <NewsModal
    ref="news"
    :article-modal="tempArticle"
  ></NewsModal>
  <div class="cartDropBox p-3">
    <div class="card border border-0">
      <i class="bi bi-x-lg fs-4 text-white
      position-absolute top-1 end-2 closeBoxBtn"
      style="cursor: pointer;"></i>
      <div class="card-header text-center
      bg-lilac fw-bold text-white">
        購物車
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table align-middle
          text-nowrap">
            <tbody>
              <tr>
                <td width="50px">
                  <div style="width:80px">
                    <img src="https://images.unsplash.com/photo-1518077824767-b1e9bb27ecb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="50px">
                  </div>
                </td>
                <td width="80px">
                  太陽眼鏡
                </td>
                <td>x300</td>
                <td>
                  <p class="mb-0 text-center">
                    $ 40000
                  </p>
                </td>
                <td>
                  <i class="bi bi-trash-fill
                  fs-3 text-danger"
                  style="cursor:pointer;"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-end fw-bold mt-3 mt-sm-0">
          總價NT$ 400
        </p>
        <button class="btn btn-outline-lilac
        w-100 btn-sm"
        type="button">結帳去</button>
      </div>
    </div>
  </div>
  <div class="favoriteDropBox p-3">
    <div class="card border border-0">
      <i class="bi bi-x-lg fs-4 text-white
      position-absolute top-1 end-2 closeBoxBtn"
      style="cursor: pointer;"></i>
      <div class="card-header text-center
      bg-lilac fw-bold text-white">
        我的最愛
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table align-middle
          text-nowrap">
            <tbody>
              <tr>
                <td width="50px">
                  <div style="width:80px">
                    <img src="https://images.unsplash.com/photo-1518077824767-b1e9bb27ecb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="50px">
                  </div>
                </td>
                <td width="80px">
                  太陽眼鏡
                </td>
                <td>x300</td>
                <td>
                  <p class="mb-0 text-center">
                    $ 40000
                  </p>
                </td>
                <td>
                  <i class="bi bi-trash-fill
                  fs-3 text-danger"
                  style="cursor:pointer;"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button class="btn btn-outline-lilac
        w-100 btn-sm mt-3 mt-sm-0"
        type="button">加入購物車</button>
      </div>
    </div>
  </div>
  <section class="banner">
    <div class="imgWrap">
      <h3 id="bannerTextImg">
        merry me
      </h3>
      <img src="/img/banner/bubble_1.png" id="bubble1">
      <img src="/img/banner/bubble_2.png" id="bubble2">
      <img src="/img/banner/curtain_left.png" id="curtainLeft">
      <img src="/img/banner/curtain_right.png" id="curtainRight">
      <img src="/img/banner/couple.png" id="couple">
    </div>
  </section>
  <main>
    <section id="aboutUS">
      <div class="container">
        <h3 class="text-center mb-5
        textTitle">
        <span>♥</span>關於我們<span>♥</span>
          <small class="d-block textSmall">
            About Us
          </small>
        </h3>
        <div class="row g-md-0">
          <div class="col-md-6 order-2 order-md-1">
            <img src="https://img.freepik.com/free-photo/gleaming-ring-silk-with-shimmering-bokeh-lights_157027-3926.jpg?t=st=1709794397~exp=1709797997~hmac=ef3f3cacd175ca30097813f4af6879cdb3cdd7888a25e15f49b19c53073faec2&w=1060"
            class="img-thumbnail">
          </div>
          <div class="col-md-6 order-1 order-md-2">
            <div class="card h-100">
              <div class="card-body
              d-flex flex-column justify-content-center
              align-items-center">
                <h4 class="card-title fs-3 fw-bold
                my-3">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </h4>
                <p>
                  希望每對戀人都能得到幸福，不會為了如何辦婚禮而苦惱。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="marqueeWrap">
      <Vue3Marquee
      :clone="true" :duration="20">
        <img src="/img/marquee/bar_icon.png">
      </Vue3Marquee>
    </div>
    <section id="newInfo">
      <div class="container">
        <h3 class="text-center
        textTitle">
        <span>♥</span>最新資訊<span>♥</span>
          <small class="d-block textSmall">
            NEWS
          </small>
        </h3>
        <RouterLink to="/newInfo" class="fs-5 d-block text-end
        text-decoration-underline fw-bold mb-3"
        style="text-transform:capitalize;
        color:#9966cc"
        >More</RouterLink>
        <div class="row row-cols-md-2 row-cols-xl-3
        row-cols-1 g-3">
        <template v-for="(news, key) in remoteArticles"
          :key="news.id">
          <div class="col"
            v-if="key < 3">
            <div class="card h-100">
              <img :src="news.imageUrl" class="bg-cover"
              height="300px;">
              <div class="card-body">
                <div class="card-title fw-bold text-center">
                  {{news.title}}
                </div>
                <p class="mb-0 text-truncate"
                  style="text-align: justify;">
                  {{news.description}}
                </p>
                <a href="#" class="stretched-link"
                @click.prevent="openInfo(news)"
                ></a>
              </div>
            </div>
          </div>
        </template>
        </div>
      </div>
    </section>
    <div class="videoWrap d-none d-md-block">
      <video src="/video/wediding.mp4"
      ref="weddingVideo"
        muted loop autoplay></video>
    </div>
    <div class="fullImg d-block d-md-none">
      <img src="https://img.freepik.com/free-photo/happy-smiling-newlyweds-with-helium-balloons-having-fun-after-wedding-ceremony_8353-5818.jpg?t=st=1711112104~exp=1711115704~hmac=ca88dd2a8d45fce46f31cb0efa74c3f2f385ef0faa1290ac654be29a4e7737fb&w=2048" alt="" class="img-fluid">
    </div>
    <section id="products">
      <div class="container">
        <h3 class="text-center  textTitle">
        <span>♥</span>服務商品<span>♥</span>
          <small class="d-block textSmall">
            Service Project
          </small>
        </h3>
        <RouterLink to="/productsPage/products"
        class="fs-5 d-block text-end
        text-decoration-underline mb-3 fw-bold"
        style="text-transform:capitalize;
        color:#9966cc;"
          >More</RouterLink>
        <div class="row row-cols-lg-2 row-cols-1 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://img.freepik.com/free-photo/view-3d-videographer-with-camera_23-2151067043.jpg?t=st=1709803117~exp=1709806717~hmac=af9f650b69f12ce1b0c3aa4917bc458c8192c315c7affd3e4f2abe586a7a0821&w=996" class="img-fluid rounded-start h-100 bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      攝影師系列
                    </h5>
                    <p class="card-text">
                      經驗豐富的攝影師，擁有超過10年的攝影經驗，
                      擅長捕捉獨特的瞬間，並將它們轉化成令人難忘的影像。
                      擁有先進的攝影設備，並擅長使用各種攝影工具和軟體，
                      以最大程度地發揮其攝影技巧。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/1327353/pexels-photo-1327353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      新娘秘書系列
                    </h5>
                    <p class="card-text">
                      厲害的宴客妝髮造型讓你成為耀眼仙女。提供專業的婚禮新秘造型服務，全台皆有新秘服務，歡迎隨時洽詢我們。深邃輕美式。甜美風編髮。輕透氧氣底妝。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.unsplash.com/photo-1624763149686-1893acf73092?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start h-100 bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      婚宴場地系列
                    </h5>
                    <p class="card-text">
                      最多風格結婚場地首選 — 捷運出站即可到，多元風格宴會空間任君挑選，為你實踐婚禮的無限可能，一站式服務，輕鬆辦婚禮。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      音樂演奏系列
                    </h5>
                    <p class="card-text">
                      時而莊嚴、平靜，時而夢幻、憂傷；時而如林間微風般難以察覺，有時卻又如同鐘鳴過後，留於謎樣般的撼動。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/195636/pexels-photo-195636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      超酷禮車系列
                    </h5>
                    <p class="card-text">
                      永恆經典 滿足你的所有想像 — 風格由你定義！
                      精選不敗車款，集結安全、時尚於一身，
                      體驗前所未有駕馭手感＃線上預約賞車。
                      提供最新車款資訊！頂尖安全科技，
                      時尚新潮外觀，動靜皆令人醉心
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/4065865/pexels-photo-4065865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      婚禮道具系列
                    </h5>
                    <p class="card-text">
                      有道具的襯托，會讓新人無論在婚宴場、
                      拍照、布置、都能充分將氛圍high到最
                      高點。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="marqueeWrap">
      <Vue3Marquee
      :clone="true" :duration="20">
        <img src="/img/marquee/bar_icon.png">
      </Vue3Marquee>
    </div>
    <div class="itemWall">
      <h3 class="text-center mb-5
      textTitle">
      <span>♥</span>案例分享<span>♥</span>
        <small class="d-block textSmall">
          Case Show
        </small>
      </h3>
      <!-- userPhotoModal -->
      <userPhotoModal
        ref="photo"
      ></userPhotoModal>
      <Vue3Marquee
      :pause-on-hover="true"
      :clone="true"
      :direction="'reverse'">
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">新秘作品</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=600" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">攝影作品</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">禮車廠牌</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.pexels.com/photos/5650950/pexels-photo-5650950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">樂團介紹</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
      </Vue3Marquee>
    </div>
    <section id="contact">
      <div class="container">
        <h3 class="text-center mb-5
        textTitle">
        <span>♥</span>幸福所在<span>♥</span>
          <small class="d-block textSmall">
            Contact Us
          </small>
        </h3>
        <div class="row row-cols-md-2
        row-cols-1 g-0">
          <div class="col d-flex justify-content-md-end
          justify-content-center">
            <iframe
            class="h-lg-100 w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14486.885240775071!2d120.9496150789712!3d24.80499476126402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835c76f23bec1%3A0x2ef21e4ee027d3ab!2z5paw56u55rOV5ZyL5be06buO5ama57SX5paw5qaC5b-16aSo!5e0!3m2!1szh-TW!2stw!4v1709882866181!5m2!1szh-TW!2stw" style="border:0; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body pb-0">
                <VForm action="#" v-slot="{ errors }"
                  @submit="onSubmit" ref="form">
                  <div class="mb-3">
                    <label for="name" class="form-label
                    d-flex align-items-start">
                      姓名
                      <i class="bi bi-asterisk text-danger
                      ms-1"
                      style="font-size: 8px;"></i>
                    </label>
                    <VField
                      id="name"
                      type="text"
                      name="姓名"
                      class="form-control"
                      rules="required"
                      v-model="form.user.name"
                      placeholder="請輸入姓名"
                      :class="{ 'is-invalid': errors['姓名'] }"
                      ></VField>
                      <error-message name="姓名"
                      class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3">
                    <label for="mail" class="form-label
                    d-flex align-items-start">
                      信箱
                      <i class="bi bi-asterisk text-danger
                      ms-1"
                      style="font-size: 8px;"></i>
                    </label>
                    <VField
                      id="mail"
                      type="mail"
                      name="信箱"
                      class="form-control"
                      placeholder="請輸入信箱"
                      rules="email|required"
                      v-model="form.user.email"
                      :class="{ 'is-invalid': errors['信箱'] }"
                      ></VField>
                      <error-message name="信箱"
                      class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3">
                    <label for="tel" class="form-label
                    d-flex align-items-center">
                      電話
                      <small class="text-muted
                      ms-1">(市內請家區碼)</small>
                    </label>
                    <VField
                      id="tel"
                      type="tel"
                      name="電話"
                      class="form-control"
                      :rules="isPhone"
                      v-model="form.user.tel"
                      :class="{ 'is-invalid': errors['電話'] }"
                      placeholder="請輸入電話"></VField>
                      <error-message name="電話"
                      class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label
                    d-flex align-items-start">
                      留言
                      <i class="bi bi-asterisk text-danger
                      ms-1"
                      style="font-size: 8px;"></i>
                    </label>
                    <VField
                      id="message"
                      rows="5"
                      name="留言"
                      class="form-control"
                      v-model="form.user.message"
                      as="textarea"
                      :class="{ 'is-invalid': errors['留言'] }"
                      ></VField>
                  </div>
                  <div class="mb-2">
                    <div class="d-flex gap-1 justify-content-end">
                      <button class="btn btn-outline-secondary
                      w-25" type="button"
                      @click.prevent="resetData"
                      >重置</button>
                      <button
                        class="btn btn-lilac
                        w-25" type="submit">送出</button>
                    </div>
                  </div>
                </VForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';
import userPhotoModal from '@/components/PhotoModal.vue';
import userToastMessageStore from '../../stores/statusStore';
import NewsModal from '../../components/NewInfoModal.vue';

gsap.registerPlugin(ScrollTrigger);
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: true,
      remoteArticles: [],
      tempArticle: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: {
    userPhotoModal,
    NewsModal,
  },
  methods: {
    ...mapActions(userToastMessageStore, ['pushMessage']),
    openPhoto() {
      this.$refs.photo.show();
    },
    getArticles() {
      this.$http(`${VITE_URL}/api/${VITE_PATH}/articles`)
        .then((res) => {
          this.remoteArticles = res.data.articles;
        });
    },
    openInfo(news) {
      this.tempArticle = news;
      this.$http(`${VITE_URL}/api/${VITE_PATH}/article/${this.tempArticle.id}`)
        .then((res) => {
          this.tempArticle = res.data.article;
          this.$refs.news.show();
        });
    },
    onSubmit() {
      Swal.fire({
        title: '收到您通知囉',
        text: '我們會盡快與您聯絡',
        icon: 'success',
      }).then(() => {
        this.$refs.form.resetForm();
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '電話號碼需09開頭唷';
    },
    resetData() {
      this.$refs.form.resetForm();
    },
  },
  mounted() {
    this.getArticles();
    const wVideo = this.$refs.weddingVideo;
    const cartDropBox = document.querySelector('.cartDropBox');
    const headerCart = document.querySelector('.headerCart');
    const headerLove = document.querySelector('.headerLove');
    const closeBoxBtns = document.querySelectorAll('.closeBoxBtn');
    const favoriteDropBox = document.querySelector('.favoriteDropBox');
    headerCart.addEventListener('click', () => {
      cartDropBox.classList.add('showCart');
      favoriteDropBox.classList.remove('showFavorite');
    });
    closeBoxBtns.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        cartDropBox.classList.remove('showCart');
        favoriteDropBox.classList.remove('showFavorite');
      });
    });
    headerLove.addEventListener('click', () => {
      favoriteDropBox.classList.add('showFavorite');
      cartDropBox.classList.remove('showCart');
    });
    wVideo.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        wVideo.pause();
      }
    });
    gsap.to('#couple', {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 2.5,
    });
    gsap.to('#bannerTextImg', {
      scrollTrigger: {
        scrub: 1,
      },
      y: -5000,
    });
    gsap.to('#bubble1', {
      scrollTrigger: {
        scrub: 1,
      },
      x: 300,
    });
    gsap.to('#bubble2', {
      scrollTrigger: {
        scrub: 1,
      },
      x: -300,
    });
    gsap.to('#curtainLeft', {
      scrollTrigger: {
        scrub: 1,
      },
      x: -1000,
    });
    gsap.to('#curtainRight', {
      scrollTrigger: {
        scrub: 1,
      },
      x: 1000,
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

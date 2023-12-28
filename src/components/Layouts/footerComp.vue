<template>
  <div class="footer" absolute>
    <v-footer :app="true" color="rgb(243,243,243)">
      <v-row>
        <v-col cols="12" class="footer-head">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p class="text">
            Get to the latest updates on new products and upcoming sales
          </p>
        </v-col>
        <v-col cols="12">
          <v-form
            class="d-flex"
            style="
              gap: 2%;
              justify-content: center;
              text-align: center;
              max-width: 700px;
              margin: auto;
            "
          >
            <v-text-field
              :items="items"
              auto-select-first
              class="flex-5"
              density="comfortable"
              item-props
              menu-icon=""
              placeholder="enter your email address "
              rounded
              theme="light"
              variant="solo"
            ></v-text-field>
            <v-btn
              rounded
              class="flex-1"
              variant="blue"
              color="white"
              style="
                background-color: rgb(18, 24, 124);
                color: white;
                text-transform: capitalize;
                height: 45px;
                width: 170px;
              "
              >submit</v-btn
            >
          </v-form>
        </v-col>
        <!-- Shop -->
        <v-col cols="3">
          <h3>SHOP</h3>
          <br />
          <!-- elements -->
          <div class="elements">
            <p>Electronics</p>
            <p>Computers</p>
            <p>Smartphones & laptops</p>
            <p>Smartphones & Tablet</p>
            <p>Cameras</p>
            <p>Video Games & Systems</p>
            <p>Home Furniture</p>
            <p>Weekly Special</p>
          </div>
        </v-col>
        <!-- Further info -->
        <v-col cols="3">
          <h3>FURTHER INFO.</h3>
          <br />
          <!-- elements -->
          <div class="elements">
            <p>About</p>
            <p>Customer Service</p>
            <p>Reward Program</p>
            <p>Shipping & Returns</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Blog</p>
          </div>
        </v-col>
        <!-- Customer Service -->
        <v-col cols="3">
          <h3>CUSTOMER SERVICE</h3>
          <br />
          <!-- elements -->
          <div class="elements">
            <p>Search Terms</p>
            <p>Advanced Search</p>
            <p>Order And Returns</p>
            <p>Contact Us</p>
            <p>Theme FAQs</p>
            <p>Consultant</p>
            <p>Store locations</p>
          </div>
        </v-col>
        <!-- company-info -->
        <v-col cols="3">
          <img src="@/assets/images/footer-logo.webp" />
          <div class="company-info my-5">
            <!-- address -->
            <div class="d-flex" style="gap: 5px; margin-bottom: 15px">
              <v-icon class="flex-1" color="rgb(73,73,73)"
                >mdi mdi-map-marker</v-icon
              >
              <div class="flex-1">
                <p>685 Market Street</p>
                <p>San Francisco, CA 94105, US</p>
              </div>
            </div>
            <!-- phone -->
            <div class="d-flex" style="gap: 5px; margin-bottom: 15px">
              <v-icon class="flex-1" color="rgb(73,73,73)"
                >mdi mdi-phone</v-icon
              >
              <div class="flex-1">
                <p>
                  Call Us at
                  <span style="text-decoration: underline">(415) 555-5555</span>
                </p>
              </div>
            </div>
            <!-- eamil -->
            <div class="d-flex" style="gap: 5px; margin-bottom: 15px">
              <v-icon class="flex-1" color="rgb(73,73,73)"
                >mdi mdi-email</v-icon
              >
              <div class="flex-1">
                <p style="text-decoration: underline">example@domain.com</p>
              </div>
            </div>
          </div>
          <v-row class="icons">
            <v-col cols="2">
              <img src="@/assets/SVGS/facebooks.svg" />
            </v-col>
            <v-col cols="2">
              <img src="@/assets/SVGS/instagrams.svg" />
            </v-col>
            <v-col cols="2">
              <img src="@/assets/SVGS/pinterests.svg" />
            </v-col>
            <v-col cols="2">
              <img src="@/assets/SVGS/snapchat.svg" />
            </v-col>
            <v-col cols="2">
              <img src="@/assets/SVGS/twitters.svg" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer-comp",
};
</script>
<style scoped>
.footer {
  display: none;
}
.icon {
  border-radius: 50%;
  width: 20px;
  height: 50px;
  background-color: rgb(74, 74, 74);
}
.icons {
  margin-top: 10px !important;
}
.footer-head {
  text-align: center;
  margin-top: 20px;
  justify-content: center;
  letter-spacing: 1px;
}
.search {
  text-align: center;
  margin-top: 20px;
  justify-content: center;
}
.text,
.elements {
  color: rgb(74, 74, 74);
}
</style>

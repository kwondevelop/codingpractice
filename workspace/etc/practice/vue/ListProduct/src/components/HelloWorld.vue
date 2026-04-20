<script setup>
import { reactive, ref, watch } from 'vue'
import axios from 'axios'

const productData = reactive({
  items: []
})

const keyword = ref('')
const selectedCategory = ref('all')
const sortType = ref('default')
const onlyDiscount = ref(false)
const cartCount = ref(0)
const loading = ref(false)
const errorMsg = ref('')

async function getProducts() {
  try {
    loading.value = true
    errorMsg.value = ''
    const res = await axios.get('https://dummyjson.com/products')
    productData.items = res.data.products
  } catch (error) {
    errorMsg.value = '데이터를 불러오지 못했습니다.'
    console.log(error)
  } finally {
    loading.value = false
  }
}

function resetAll() {
  productData.items = []
  keyword.value = ''
  selectedCategory.value = 'all'
  sortType.value = 'default'
  onlyDiscount.value = false
  cartCount.value = 0
  errorMsg.value = ''
}

function addCart() {
  cartCount.value++
}

function isMatchProduct(item) {
  const matchKeyword = item.title.toLowerCase().includes(keyword.value.toLowerCase())
  const matchCategory = selectedCategory.value === 'all' || item.category === selectedCategory.value
  const matchDiscount = !onlyDiscount.value || item.discountPercentage > 0

  return matchKeyword && matchCategory && matchDiscount
}

function sortedItems() {
  const copied = [...productData.items]

  if (sortType.value === 'priceAsc') {
    copied.sort((a, b) => a.price - b.price)
  } else if (sortType.value === 'priceDesc') {
    copied.sort((a, b) => b.price - a.price)
  } else if (sortType.value === 'ratingDesc') {
    copied.sort((a, b) => b.rating - a.rating)
  } else if (sortType.value === 'titleAsc') {
    copied.sort((a, b) => a.title.localeCompare(b.title))
  }

  return copied
}

watch (
  () => productData.items.length,
  (newVal) => {
    console.log(`현재 상품 개수: ${newVal}`)
  }
)

watch(keyword, (newVal) => {
  console.log(`검색어 변경: ${newVal}`)
})

watch(cartCount, (newVal) => {
  console.log(`장바구니 수: ${newVal}`)
})
</script>

<template>
  <div>
    <h1>상품 목록 앱</h1>

    <button @click="getProducts">상품 불러오기</button>
    <button @click="resetAll">전체 초기화</button>

    <p>장바구니: {{ cartCount }}개</p>

    <div>
      <input type="text" v-model="keyword" placeholder="상품명 검색" />
    </div>

    <div>
      <select v-model="selectedCategory">
        <option value="all">전체</option>
        <option value="beauty">화장품</option>
        <option value="fragrances">향수</option>
        <option value="furniture">가구</option>
        <option value="groceries">식료품</option>
      </select>

      <select v-model="sortType">
        <option value="default">기본순</option>
        <option value="priceAsc">가격 낮은순</option>
        <option value="priceDesc">가격 높은순</option>
        <option value="ratingDesc">평점 높은순</option>
        <option value="titleAsc">이름 가나다순</option>
      </select>

      <label>
        <input type="checkbox" v-model="onlyDiscount" />
        할인 상품만 보기
      </label>
    </div>

    <p v-if="loading">불러오는 중...</p>
    <p v-if="errorMsg">{{ errorMsg }}</p>
    <p v-if="!loading && productData.items.length === 0">상품이 없습니다.</p>

    <div v-else class="container">
      <div
        class="card"
        v-for="item in sortedItems()"
        :key="item.id"
        v-show="isMatchProduct(item)"
      >
        <div
          class="card-img"
          :style="{ backgroundImage: `url(${item.thumbnail})` }"
        ></div>

        <p><strong>{{ item.title }}</strong></p>
        <p>가격: ${{ item.price }}</p>
        <p>카테고리: {{ item.category }}</p>
        <p>평점: {{ item.rating }}</p>
        <p v-if="item.stock > 0">재고 있음 ({{ item.stock }})</p>
        <p v-else>품절</p>

        <button @click="addCart">담기</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
  justify-content: center;
}

.container :hover {
  color: yellow;
}

.card {
  width: 220px;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 12px;
}

.card-img {
  width: 100%;
  height: 160px;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
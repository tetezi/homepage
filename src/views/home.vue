<template>
    <div class="body">
        <div class="left">
            <div style="font-size: 60px;display: flex;align-items: center;   ">
                <el-image src="/src/assets/avatar.png"
                    style="    background: #141500;  border:1px solid black;border-radius: 50%; width: 1.5em; height: 1.5em;   "></el-image>
                <span style="margin-left: .5em; font-weight: bold;color: #000;">特特子</span>

            </div>
            <Card style="font-size: 24px;margin:20px 0;width: 100%;" class="test">
                <div style="margin:10px 0; position: relative">
                    <div style=" font-weight: bold;position: absolute;top: -.5em;left:-.5em">“</div>
                    <div style="margin:0 1em  ">
                        要是舍弃了个性，就跟死去没有两样
                    </div>
                    <div style=" font-weight: bold;position: absolute;bottom:-.5em;right:-.5em">”</div>
                </div>
            </Card>
            <div>

                <el-button v-for="contact of contacts" circle size="large"
                    @click="() => copy(contact.value, contact.tag)">
                    <template #icon>
                        <el-icon color="#8EAEC6" size="large">
                            <svg t="1731241231157" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3635" width="200" height="200">
                                <path :d="contact.icon">
                                </path>
                            </svg>
                        </el-icon>
                    </template>
                </el-button>
            </div>
        </div>
        <div class="middle">


            <!--TODO -->生命倒计时
        </div>
        <div class="middle"> <!--TODO -->匿名留言板 </div>
    </div>
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { ElMessage } from "element-plus";
const contacts = [
    {
        tag: 'qq',
        value: '1913483156',
        icon: 'M849.621 619.904a1364.352 1364.352 0 0 0-28.8-80.47l-38.826-95.829c0-1.109 0.512-19.968 0.512-29.696 0-163.882-78.208-328.576-270.507-328.576S241.493 250.027 241.493 413.867c0 9.77 0.47 28.629 0.512 29.738l-38.826 95.83a1398.485 1398.485 0 0 0-28.8 80.469c-36.694 116.779-24.79 165.12-15.744 166.187 19.413 2.304 75.562-87.894 75.562-87.894 0 52.224 27.179 120.406 86.016 169.643-21.973 6.699-48.938 17.024-66.304 29.653-15.573 11.392-13.61 23.04-10.794 27.734 12.33 20.522 211.413 13.098 268.928 6.698 57.472 6.4 256.597 13.824 268.885-6.741 2.816-4.693 4.779-16.299-10.795-27.69-17.365-12.63-44.33-22.955-66.346-29.697 58.837-49.194 86.016-117.376 86.016-169.642 0 0 56.149 90.24 75.562 87.893 9.046-1.067 20.907-49.365-15.786-166.144'
    },
    {
        tag: '微信',
        value: '13570085002',
        icon: "M792.49 585.003a38.827 38.827 0 0 0 38.315-38.315c0-21.248-17.024-38.315-38.314-38.315s-38.315 17.067-38.315 38.315c0 21.333 17.067 38.315 38.315 38.315z m-188.8 0a38.827 38.827 0 0 0 38.315-38.315 38.203 38.203 0 0 0-38.314-38.315c-21.334 0-38.315 17.067-38.315 38.315 0 21.333 17.024 38.315 38.315 38.315z m280.193 215.04a14.805 14.805 0 0 0-7.339 15.786c0 2.048 0 4.139 1.067 6.272 4.181 17.792 12.544 46.123 12.544 47.19 0 3.114 1.066 5.205 1.066 7.338a9.387 9.387 0 0 1-9.429 9.387c-2.133 0-3.157-1.024-5.248-2.048l-61.824-35.67a34.09 34.09 0 0 0-14.677-4.18c-3.115 0-6.272 0-8.363 1.023-29.355 8.406-59.733 12.587-92.203 12.587-156.16 0-281.898-104.832-281.898-234.88 0-130.005 125.738-234.88 281.898-234.88 156.118 0 281.856 104.875 281.856 234.88 0 70.272-37.717 134.23-97.45 177.237zM711.38 345.557a388.48 388.48 0 0 0-11.946-0.213c-178.091 0-324.523 122.027-324.523 277.547 0 23.637 3.413 46.506 9.728 68.266h-3.797a425.088 425.088 0 0 1-110.251-15.701c-3.157-1.067-6.315-1.067-9.472-1.067a35.499 35.499 0 0 0-17.835 5.248l-74.581 42.88c-2.133 1.067-4.224 2.134-6.315 2.134a11.648 11.648 0 0 1-11.52-11.52c0-3.158 1.024-5.248 2.091-8.406 1.024-1.024 10.496-35.584 15.744-56.49 0-2.134 1.024-5.248 1.024-7.339a23.723 23.723 0 0 0-9.43-18.859C87.809 570.71 42.668 494.336 42.668 409.515c0-155.862 152.32-281.515 339.2-281.515 160.64 0 295.68 92.544 329.514 217.515z m-219.904 17.835c24.448 0 43.776-20.352 43.776-43.776 0-24.448-19.328-43.776-43.776-43.776s-43.776 19.328-43.776 43.776 19.328 43.776 43.776 43.776z m-224.426 0c24.448 0 43.818-20.352 43.818-43.776 0-24.448-19.37-43.776-43.818-43.776-24.406 0-43.776 19.328-43.776 43.776s19.37 43.776 43.776 43.776z"
    },
    {
        tag: '邮箱',
        value: 'MaHouShouJoTetezi@foxmail.com',
        icon: "M149.6 171.8h691.9c47.2 0 85.9 37.7 86.5 83.9L495.7 493 63.5 256c0.4-46.4 38.8-84.2 86.1-84.2z m-86.1 175l-0.4 419.6c0 46.7 38.9 84.9 86.5 84.9h691.9c47.6 0 86.5-38.2 86.5-84.9V346.6L505.9 572.8c-6.5 3.5-14.3 3.5-20.7 0l-421.7-226z"
    },
]
function copy(text, tag) {
    navigator.clipboard.writeText(text).then((res) => {
        ElMessage.success(`${tag || ''}复制成功`)
    })
}
</script>
<style scoped lang="scss">
.body {
    width: 100vw;
    height: 100vh;

    .left {
        padding: 10px;
    }
}

@media (max-width: 768px) {}

@media (min-width: 768px) {
    .body {
        display: flex;
        align-items: center;

        >div {
            margin: 0 20px
        }

        .left {
            flex: 1
        }

        .middle {
            flex: 1
        }

        .right {
            flex: 1
        }
    }



}
</style>
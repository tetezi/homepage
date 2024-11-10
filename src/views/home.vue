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
        </div>
        <div class="middle"> <!--TODO -->生命倒计时 </div>
        <div class="middle"> <!--TODO -->匿名留言板 </div> 
    </div>
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";  
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
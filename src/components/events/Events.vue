<template>
    <div>
        <div class="content-between" v-bind:key="event.id" v-for="event in events">
            <EventItem v-bind:event="event" v-bind:value="value" /><br />
        </div>
    </div>
</template>

<script>
import EventItem from './EventItem.vue';

export default {
    name: "Events",
    components: {
        EventItem
    },
    props: ["events"],
    data() {
            return {
            value: null    
            }
        },
    methods: {
            getCookie(name) {
                const value = document.cookie;
                const parts = value.split(name);
                if (parts.length === 2) return parts.pop().split(';').shift();

            }
        },
        created() {
            if(this.getCookie("Token") != null){
                this.value = true;

                var base64Url = this.getCookie("Token").split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                var user = JSON.parse(jsonPayload);
                this.value = user.sub;
                console.log(user);
            }
                
        }
}
</script>
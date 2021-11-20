<template>
    <article>
        <img alt="" src="#" />
        <Heading :level="headingLevel"> {{ title }} </Heading>
        <div>
            <p v-if="voteIsSubmited">Thank you for you vote</p>
            <time v-else itemprop="datePublished" :datetime="datePublished">
                {{ datePublished }}
            </time>
        </div>
        <p>{{ description }}</p>
        <div>
            <p
                :aria-label="`${upvotes} of voters liked this celebrity`"
            >
                {{ upvotes }}
            </p>
            <p
                :aria-label="`${downvotes} of voters disliked this celebrity`"
            >
                {{ downvotes }}
            </p>
        </div>
        <form>
            <button v-if="voteIsSubmited" type="button" @click="resetCard">
                Vote Again
            </button>
            <div v-else>
                <button
                    aria-label="like this celebrity"
                    @click="selectVote(1)"
                    type="button"
                >
                    up
                </button>
                <button
                    aria-label="dislike this celebrity"
                    @click="selectVote(0)"
                    type="button"
                >
                    down
                </button>
                <button type="button" :disabled="userHasVoted" @click="submitVote">
                    Vote Now
                </button>
            </div>
        </form>
    </article>
</template>

<script>
import Heading from '@/components/Heading';

export default {
    name: 'Card',
    components: {
        Heading,
    },
    data() {
        return{
            selectedVote: null,
            voteIsSubmited: false
        }
    },
    methods:{
        selectVote(vote){
            this.selectedVote = vote
        },
        submitVote(){
            this.voteIsSubmited = true
        },
        resetCard(){
            this.selectedVote = null
            this.voteIsSubmited = false
        }
    },
    computed:{
        userHasVoted(){
            if (this.selectedVote === 0 || this.selectedVote === 1){
                return false
            }
            return true
        }
    },
    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },
        headingLevel: {
            type: Number,
            default: 3,
        },
        description: {
            type: String,
            default: '',
            required: true,
        },
        upvotes: {
            type: Number,
            default: 0,
        },
        downvotes: {
            type: Number,
            default: 0,
        },
        datePublished: {
            type: String,
            default: '',
        },
    },
};
</script>

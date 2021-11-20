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
            <GaugeBar
                :upvotes="12"
                :downvotes="1"
                :upvoteLabel="`${upvotes} of voters liked this celebrity`"
                :downvoteLabel="`${downvotes} of voters disliked this celebrity`"
            />
        </div>
        <form>
            <Button
                v-if="voteIsSubmited"
                :click="resetCard"
            >
                Vote Again
            </Button>
            <div v-else>
                <ReactionButton
                    aria-label="like this celebrity"
                    type="upvote"
                    @click="selectVote(1)"
                    :is-selected="selectedVote===1"
                />
                <ReactionButton
                    aria-label="dislike this celebrity"
                    type="downvote"
                    @click="selectVote(0)"
                    :is-selected="selectedVote===0"
                />
                <Button
                    :disabled="userHasVoted"
                    :click="submitVote"
                >
                    Vote Now
                </Button>
            </div>
        </form>
    </article>
</template>

<script>
import Heading from '@/components/Heading';
import GaugeBar from '@/components/GaugeBar';
import Button from '@/components/Button';
import ReactionButton from '@/components/ReactionButton';

export default {
    name: 'Card',
    components: {
        Heading,
        GaugeBar,
        Button,
        ReactionButton
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

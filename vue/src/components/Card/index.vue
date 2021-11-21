<template>
    <article :class="`card card--${layout}`">
        <img alt="" src="https://picsum.photos/600/500" class="image"/>
        <div class="content">
            <div v-if="winningVotes===1" class="upvoteBadge"></div>
            <div v-else class="downvoteBadge"></div>
            <div>
                <Heading class="title" :level="headingLevel"> {{ title }} </Heading>
                <p class="description">{{ description }}</p>
            </div>
            <div>
                <div class="submitedDate">
                    <p v-if="voteIsSubmited">Thank you for you vote!</p>
                    <time v-else itemprop="datePublished" :datetime="datePublished">
                        {{ datePublished }}
                    </time>
                </div>
                <form class="form">
                    <Button
                        v-if="voteIsSubmited"
                        :click="resetCard"
                        :size="childrenSizes"
                    >
                        Vote Again
                    </Button>
                    <div v-else class="voteButons">
                        <ReactionButton
                            class="reactionButton"
                            aria-label="like this celebrity"
                            type="upvote"
                            @click="selectVote(1)"
                            :is-selected="selectedVote===1"
                            :size="childrenSizes"
                        />
                        <ReactionButton
                            class="reactionButton"
                            aria-label="dislike this celebrity"
                            type="downvote"
                            @click="selectVote(0)"
                            :is-selected="selectedVote===0"
                            :size="childrenSizes"
                        />
                        <Button
                            class="voteButton"
                            :disabled="userHasVoted"
                            :click="submitVote"
                            :size="childrenSizes"
                        >
                            Vote Now
                        </Button>
                    </div>
                </form>
            </div>
        </div>
        <GaugeBar
            :upvotes="upvotes"
            :downvotes="downvotes"
            :upvoteLabel="`${upvotes} of voters liked this celebrity`"
            :downvoteLabel="`${downvotes} of voters disliked this celebrity`"
            :size="childrenSizes"
        />
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
            this.$emit("onSubmitVote",this.selectedVote);
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
        },
        winningVotes(){
            if(this.upvotes >= this.downvotes){
                return 1
            }
            else{
                return 0
            }
        },
        childrenSizes(){
            if(this.layout==='grid'){
                return 'small'
            }
            return 'medium'
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
        layout: {
            type: String,
            default: 'list',
            validator (value) {
                return ['grid', 'list'].indexOf(value) !== -1
            },
        }
    },
};
</script>

<style scoped>
    .card{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: white;
        z-index: 1;
    }
    .card::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
        z-index: -1;
    }
    .image{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        object-fit: cover;
        object-position: center center;
    }
    .content{
        padding: 2rem 3rem 1rem 3rem;
    }
    .title{
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: var(--text-5);
    }
    .description{
        margin-bottom: 1rem;
        font-size: var(--text-2);
    }
    .voteButons{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .submitedDate,
    .form{
        text-align: right;
    }
    .submitedDate{
        margin-bottom: 1rem;
    }
    .voteButton,
    .reactionButton{
        margin-left: 1rem;
    }
    .upvoteBadge,
    .downvoteBadge{
        width: 30px;
        height: 30px;
        position: absolute;
        left: 0;
    }
    .upvoteBadge{
        background: 
            var(--color-green)
            url('~@/assets/img/thumbs-up.svg') no-repeat center;
    }
    .downvoteBadge{
        background: 
            var(--color-yellow)
            url('~@/assets/img/thumbs-down.svg') no-repeat center;
    }
    @media screen and (min-width:768px) {
        .card::before{
            width: 90%;
            left: auto;
            right: 0;
            background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);
        }
        .content{
            display: flex;
            justify-content: space-between;
            padding: 2rem 3rem 2rem 15rem;
        }
        .title{
            margin-bottom: 1.2rem;
            font-size: var(--text-5);
        }
        .description{
            margin: 0;
            font-size: var(--text-3);
        }
        .upvoteBadge,
        .downvoteBadge{
            top: 0;
        }
        .image{
            width: 30%;
        }
        .card.card--grid::before{
            width: 100%;
            background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
        }
        .card--grid .image{
            width: 100%;
        }
        .card--grid .content{
            padding-left: 5rem;
            flex-direction: column;
            justify-content: flex-end;
        }
        .card--grid .description{
            margin: 0 0 1.5rem 0;
            font-size: var(--text-2);
        }
        .card--grid .upvoteBadge,
        .card--grid.downvoteBadge{
            top: 2rem
        }
    }
    @media screen and (min-width:1010px) {
        .title{
            margin-bottom: 1.5rem;
            font-size: var(--text-6);
        }
        .description{
            margin: 0;
            font-size: var(--text-4);
        }
        .submitedDate{
            font-size: var(--text-2);
        }
        .upvoteBadge,
        .downvoteBadge{
            width: 45px;
            height: 45px;
            background-size: 24px auto;
        }
        .card--grid .upvoteBadge,
        .card--grid .downvoteBadge{
            width: 30px;
            height: 30px;
            background-size: 16px auto;
        }
        .card--grid .submitedDate{
            font-size: var(--text-1);
        }
    }
</style>
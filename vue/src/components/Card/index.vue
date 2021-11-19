<template>
    <article>
        <img alt="" src="#" />
        <Heading :level="headingLevel"> {{ title }} </Heading>
        <time itemprop="datePublished" :datetime="datePublished">
            {{ datePublished }}
        </time>
        <p>{{ description }}</p>
        <div>
            <p
                aria-hidden="true"
                :aria-label="`${upvotes} of voters liked this celebrity`"
            >
                {{ upvotes }}
            </p>
            <p
                aria-hidden="true"
                :aria-label="`${downvotes} of voters disliked this celebrity`"
            >
                {{ downvotes }}
            </p>
        </div>
        <form>
            <button title="Vote with a like for this celebrity">
                Vote Now
            </button>
            <div>
                <button aria-label="like this celebrity"></button>
                <button aria-label="dislike this celebrity"></button>
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

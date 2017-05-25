# User Experience Specification

For the MVP of this project, we would like to configure an SMS notification system that will allow users to receive notifications about events pertaining to specific pieces of legislation they care about.

There will be two primary components of the system - a conversational "bot" interface via SMS, and a background notification system that sends out periodic updates.

## Subscription Flow

1. User texts `hello` to a Twilio number for the notification system
1. User receives a welcome message detailing the commands that can be sent to the system
1. User texts `list` to see the types of data they can subscribe to
1. User texts `subscribe bill` to subscribe for notifications on a specific piece of legislation. The system responds by asking for their state of residence.
1. User texts in "mn"
1. System prompts for the name of the piece of legislation
1. User texts "HF 20210"
1. User is now subscribed for updates on House File 90210 in the MN state legislature
1. (meta) - A Notify binding is created with a tag `bill;mn;hf90210`

## Unsubscribe Flow

1. User texts `unsub` to unsubscribe from a notification
2. The system responds with a numbered list of subscriptions
1. The user texts back in the number of the subscription they want to cancel
1. The system removes notifications on that particular subscription by removing the tag for the Notify binding. (meta - think the binding needs to be deleted and re-created for this)

## Notification Flow

The system will periodically poll open states for new information related to pieces of legislation and upcoming events (hearings, committees, etc). When the system determines what information is new since the last time the API was polled, It will construct a Notify tag dynamically in the format:

```
<subscription type>;<state/other data>;<bill ID>
```

That batch of notifications is sent to Notify, who then determines which of the subscribed users to send a Notification to.